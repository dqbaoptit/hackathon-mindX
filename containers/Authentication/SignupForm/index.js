import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { TextField } from '@material-ui/core';
import { Register } from '../../../redux/actions/auth';
import swal from 'sweetalert';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import '../index.scss';

let easing = [0.6, -0.05, 0.01, 0.99];

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
const Signup = () => {
  const router = useRouter();
  const { register, errors, handleSubmit } = useForm();

  const [_error, setError] = useState(false);

  const onSubmit = (data) => {
    if (data.password != data.confirm_password) {
      setError(true);
    } else {
      delete data['confirm_password'];
    }
    Register(data)
      .then(() => {
        swal({
          title: 'Great !',
          text: 'Đăng ký thành công ! ',
          icon: 'success',
        });
        setTimeout(() => router.push('/'), 500);
      })
      .catch((err) =>
        swal({
          title: 'Somthing wrong !',
          text: err?.response.data.error.message,
          icon: 'error',
        })
      );
  };
  return (
    <>
      <div className="form--container" align="center">
        <div align="center" className="form">
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 200, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            onClick={() => router.push('/')}
            style={{ cursor: 'pointer' }}
            className="form__title"
          >
            <img src="/logo.png" className="img-responsive" alt="" />
          </motion.div>
          <motion.p
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.8 }}
            className="form__module"
          >
            Dùng thử miễn phí ngay
          </motion.p>
          <motion.form
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="form__group"
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              style={{ borderBottom: ' 1px solid #DEE2E6' }}
              className="form__group--input"
              label="Địa chỉ email"
              type="email"
              name="email"
              inputRef={register({
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
            />
            {errors.email?.type == 'required' && (
              <span className="errors">Email không được bỏ trống</span>
            )}
            {errors.email?.type == 'pattern' && (
              <span className="errors">Email không hợp lệ</span>
            )}
            <TextField
              style={{ borderBottom: ' 1px solid #DEE2E6' }}
              className="form__group--input"
              label="Họ và tên đệm"
              type="text"
              name="firstName"
              inputRef={register({ required: true })}
            />
            {errors.fullName && (
              <span className="errors">Hãy nhập vào tên của bạn</span>
            )}
            <TextField
              style={{ borderBottom: ' 1px solid #DEE2E6' }}
              className="form__group--input"
              label="Tên"
              type="text"
              name="lastName"
              inputRef={register({ required: true })}
            />
            {errors.fullName && (
              <span className="errors">Hãy nhập vào tên của bạn</span>
            )}

            <TextField
              style={{ borderBottom: ' 1px solid #DEE2E6' }}
              className="form__group--input"
              label="Mật khẩu"
              type="password"
              inputRef={register({ required: true })}
              name="password"
            />
            {errors.password && (
              <span className="errors">Mật khẩu không thể bỏ trống</span>
            )}
            <TextField
              style={{ borderBottom: ' 1px solid #DEE2E6' }}
              className="form__group--input"
              label="Nhập lại mật khẩu"
              type="password"
              inputRef={register({ required: true })}
              name="confirm_password"
            />
            {_error && <span className="errors">Mật khẩu không khớp</span>}
            {errors.confirm_password && (
              <span className="errors">Hãy nhập lại mật khẩu</span>
            )}
            <div style={{ width: '50%', marginTop: '2rem' }}>
              <button className="form__btn" type="submit">
                Đăng ký
              </button>
            </div>
            <div className="form__other">
              <span>
                Bạn đã có tài khoản? <Link href="/"> Đăng nhập </Link>
              </span>
            </div>
          </motion.form>
        </div>
      </div>
    </>
  );
};
export default Signup;
