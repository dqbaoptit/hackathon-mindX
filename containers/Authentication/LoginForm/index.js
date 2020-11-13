import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  Login,
  handleAfterLogin,
  ForgotPassword,
} from '../../../redux/actions/auth';

import swal from 'sweetalert';

import { TextField } from '@material-ui/core';
import { Button } from '../../../components/index';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import '../index.scss';
import SignByGmail from './SignByGmail';

let easing = [0.6, -0.05, 0.01, 0.99];

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const Forgot = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  return (
    <div align="center" className="form">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '15rem',
        }}
      >
        <img src="/logoitmc.png" className="img-responsive" alt="" />
      </div>
      <p className="form__module">Quên mật khẩu</p>
      <form className="form__group">
        <TextField
          style={{ borderBottom: ' 1px solid #DEE2E6' }}
          className="form__group--input"
          label="Địa chỉ email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div style={{ marginTop: '2rem' }}>
          <Button
            type="active"
            text="Gửi liên kết mật khẩu"
            onClick={() => {
              ForgotPassword({ email })
                .then((res) => {
                  swal({
                    title: 'Hãy kiểm tra Email của bạn.',
                    icon: 'success',
                  });
                })
                .catch((err) => {
                  swal({
                    title: 'Không tìm thấy email của bạn',
                    icon: 'error',
                  });
                });
            }}
          />
        </div>
        <div className="form__other">
          <div>
            <a
              onClick={() => router.push('/login')}
              style={{ cursor: 'pointer' }}
            >
              <ArrowBackIosIcon style={{ margin: '-6px 4px', fontSize: 23 }} />
              Quay lại
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};
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
        {router.query.forgot ? (
          <Forgot />
        ) : (
          <div
            align="center"
            className="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <motion.div
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 200, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              className="form__title"
              onClick={() => router.push('/')}
              style={{ cursor: 'pointer' }}
            >
              <img src="/logoitmc.png" className="img-responsive" alt="" />
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
              <SignByGmail />
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
        )}
      </div>
    </>
  );
};
export default LoginForm;
