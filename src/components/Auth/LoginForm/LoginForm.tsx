import React, {useCallback} from 'react';
import { Formik, FormikHelpers} from 'formik';
import { StyledWrap } from './LoginFormStyled';
import {useAppDispatch} from '../../../store/hooks';
import { useNavigate } from 'react-router-dom';
import {loginUser} from "../feature/actionCreators";
import {appCookiesStorage} from "../../../utils";
import {AUTHORIZATION_ACCESS_TOKEN} from "../../../constants/common";

export interface IValues {
    email: string;
    password: string;
}

const initialValues = { email: '', password: '' };

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const validate = (values: any) => {
    return sleep(2000).then(() => {
        const errors: any = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        return errors;
    });
};

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onSubmit = useCallback(
        async (data: IValues, actions: FormikHelpers<any>) => {
            const response = await dispatch(loginUser(data)).unwrap();
            appCookiesStorage.setItem(AUTHORIZATION_ACCESS_TOKEN, response.access_token)
            actions.resetForm({values: initialValues});
            navigate('/products');
        }, [dispatch, navigate]);

    return (
        <StyledWrap>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validate={validate}
                validateOnChange={false}
                validateOnBlur={false}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <div>Authorization</div>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && touched.email && errors.email}
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {errors.password && touched.password && errors.password}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </StyledWrap>
    );
}

export default LoginForm;
