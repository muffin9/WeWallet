import Image from 'next/image';
import LogoComponent from '@/assets/images/logo.png';
import Button from '@/components/atoms/Button';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AccessLabel from '@/components/molecule/AccessLabel';
import Label from '@/components/atoms/Label';
import AccessInput from '@/components/molecule/AccessInput';
import Input from '@/components/atoms/Input';
import useLogin from '@/hooks/Login/useLogin';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('올바른 이메일 형식이 아닙니다.')
    .required('이메일을 입력해주세요.'),
  password: yup
    .string()
    .max(16, '비밀번호는 최대 16자리입니다!')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}[^\s]*$/,
      '알파벳, 숫자, 공백을 제외한 특수문자를 모두 포함한 8자리 이상 입력해주세요',
    )
    .required('비밀번호를 입력해주세요'),
});

const login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    watch,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const { fetchLoginUser } = useLogin();

  const onSubmit = () => {
    const user = { email: watch('email'), password: watch('password') };
    fetchLoginUser.mutate(user);
  };

  return (
    <section className="h-full py-14 flex flex-col justify-center">
      <div className="flex justify-center mb-8">
        <Image
          src={LogoComponent}
          width={70}
          height={80}
          alt="Wewallet Logo"
        />
      </div>
      <h1 className="main-title text-center">Wewallet!</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-32"
      >
        <div className="flex flex-col gap-y-4 justify-center m-5">
          <AccessLabel
            variant={errors.email ? 'error' : 'default'}
            LabelComponent={
              <Label
                id="email"
                name="이메일"
              />
            }
          />
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <AccessInput
                variant={errors.email ? 'error' : 'default'}
                InputComponent={
                  <Input
                    type="text"
                    variant={errors.email ? 'error' : 'default'}
                    placeholder="이메일을 입력해주세요."
                    {...field}
                  />
                }
                onResetValue={() => field.onChange('')}
              />
            )}
          />
        </div>
        <div className="flex flex-col gap-y-4 justify-center m-5">
          <AccessLabel
            variant={errors.password ? 'error' : 'default'}
            LabelComponent={
              <Label
                id="password"
                name="패스워드"
              />
            }
          />
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <AccessInput
                variant={errors.password ? 'error' : 'default'}
                InputComponent={
                  <Input
                    type="password"
                    variant={errors.password ? 'error' : 'default'}
                    placeholder="패스워드을 입력해주세요."
                    {...field}
                  />
                }
                onResetValue={() => field.onChange('')}
              />
            )}
          />
        </div>
        <div className="mt-12">
          <Button
            variant={!isDirty || !isValid ? 'default' : 'primary'}
            disabled={!isDirty || !isValid}
            size="large"
            text="로그인"
            width="w-full"
            type="submit"
          />
        </div>
      </form>
    </section>
  );
};

export default login;
