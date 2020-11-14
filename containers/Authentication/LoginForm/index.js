import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Login, handleAfterLogin } from '../../../redux/actions/auth';

import swal from 'sweetalert';

import { TextField } from '@material-ui/core';

import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import '../index.scss';

let easing = [0.6, -0.05, 0.01, 0.99];

const LoginForm = () => {
  const { register, errors, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    Login(data)
      .then((res) => {
        swal({
          title: 'Great !',
          text: 'Đăng nhập thành công',
          icon: 'success',
        });
        setTimeout(function () {
          handleAfterLogin(res.data);
          router.push('/');
        }, 400);
      })
      .catch((err) =>
        swal({
          title: 'Something wrong !',
          text: err.response?.data.message,
          icon: 'error',
        })
      );
  };

  return (
    <>
      <div className="form--container" align="center">
        <div align="center" className="form" onSubmit={handleSubmit(onSubmit)}>
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 200, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="form__title"
            onClick={() => router.push('/')}
            style={{ cursor: 'pointer' }}
          >
            <img src="/vercel.svg" className="img-responsive" alt="" />
          </motion.div>
          <motion.p
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.8 }}
            className="form__module"
          >
            Đăng nhập
          </motion.p>
          <motion.form
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="form__group"
          >
            <TextField
              style={{ borderBottom: ' 1px solid #DEE2E6' }}
              className="form__group--input"
              label="Địa chỉ email"
              type="email"
              name="email"
              inputRef={register({ required: true })}
            />
            {errors.email && (
              <span className="errors">Email không thể bỏ trống</span>
            )}
            <TextField
              style={{ borderBottom: ' 1px solid #DEE2E6' }}
              className="form__group--input"
              label="Mật khẩu"
              type="password"
              name="password"
              inputRef={register({ required: true })}
            />
            {errors.password && (
              <span className="errors">Password không thể bỏ trống</span>
            )}
            <div style={{ width: '50%', marginTop: '2rem' }}>
              <button className="form__btn" type="submit">
                Đăng nhập
              </button>
            </div>
            <div className="form__other">
              <span>
                Bạn chưa có tài khoản?{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={() => router.push('/signup')}
                >
                  {' '}
                  Đăng ký{' '}
                </a>
              </span>
            </div>
          </motion.form>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
