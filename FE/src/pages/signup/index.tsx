import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import AccessLabel from '@/components/molecule/AccessLabel';
import AccessInput from '@/components/molecule/AccessInput';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useCheckDuplicateEmail from '@/hooks/Signup/useCheckDuplicateEmail';
import Label from '@/components/atoms/Label';
import useSignup from '@/hooks/Signup/useSignup';
import useModalStore from '@/store/useModalStore';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('올바른 이메일 형식이 아닙니다.')
    .required('이메일을 입력해주세요.'),
  nickname: yup
    .string()
    .min(2, '닉네임은 최소 2글자 이상입니다!')
    .max(10, '닉네임은 최대 10글자입니다!')
    .matches(
      /^[가-힣a-zA-Z][^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/,
      '닉네임에 특수문자가 포함되면 안되고 숫자로 시작할 수 없습니다.',
    )
    .required('닉네임을 입력해주세요'),
  name: yup.string().required('이름을 입력해주세요.'),
  pw: yup
    .string()
    .max(16, '비밀번호는 최대 16자리입니다!')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}[^\s]*$/,
      '알파벳, 숫자, 공백을 제외한 특수문자를 모두 포함한 8자리 이상 입력해주세요',
    )
    .required('비밀번호를 입력해주세요'),
  checkPw: yup
    .string()
    .oneOf([yup.ref('pw'), ''], '비밀번호가 일치하지 않습니다.')
    .required('비밀번호를 한번 더 입력해주세요'),
});

const Signup = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    watch,
  } = useForm({
    defaultValues: {
      email: '',
      nickname: '',
      name: '',
      pw: '',
      checkPw: '',
    },
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const { checkEmailRefetch } = useCheckDuplicateEmail(watch('email'));
  const { fetchSignupUser } = useSignup();

  const handleDuplicateEmail = () => {
    if (watch('email')) checkEmailRefetch();
  };

  const onSubmit = () => {
    const newUser = {
      email: watch('email'),
      nickname: watch('nickname'),
      name: watch('name'),
      password: watch('pw'),
    };
    fetchSignupUser.mutate(newUser);
  };

  return (
    <>
      <section className="h-full flex flex-col justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <Button
              variant="default"
              text="중복 확인"
              size="small"
              width="w-20"
              type="button"
              className="text-xs text-white"
              onClick={handleDuplicateEmail}
            />
          </div>
          <div className="flex flex-col gap-y-4 justify-center m-5">
            <AccessLabel
              variant={errors.nickname ? 'error' : 'default'}
              LabelComponent={
                <Label
                  id="nickname"
                  name="별명"
                />
              }
            />
            <Controller
              control={control}
              name="nickname"
              render={({ field }) => (
                <AccessInput
                  variant={errors.nickname ? 'error' : 'default'}
                  InputComponent={
                    <Input
                      type="text"
                      variant={errors.nickname ? 'error' : 'default'}
                      placeholder="별명을 입력해주세요."
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
              variant={errors.name ? 'error' : 'default'}
              LabelComponent={
                <Label
                  id="name"
                  name="이름"
                />
              }
            />
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <AccessInput
                  variant={errors.name ? 'error' : 'default'}
                  InputComponent={
                    <Input
                      type="text"
                      variant={errors.name ? 'error' : 'default'}
                      placeholder="이름을 입력해주세요."
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
              variant={errors.pw ? 'error' : 'default'}
              LabelComponent={
                <Label
                  id="pw"
                  name="패스워드"
                />
              }
            />
            <Controller
              control={control}
              name="pw"
              render={({ field }) => (
                <AccessInput
                  variant={errors.pw ? 'error' : 'default'}
                  InputComponent={
                    <Input
                      type="password"
                      variant={errors.pw ? 'error' : 'default'}
                      placeholder="패스워드을 입력해주세요."
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
              variant={errors.checkPw ? 'error' : 'default'}
              LabelComponent={
                <Label
                  id="checkPw"
                  name="패스워드 확인"
                />
              }
            />
            <Controller
              control={control}
              name="checkPw"
              render={({ field }) => (
                <AccessInput
                  variant={errors.checkPw ? 'error' : 'default'}
                  InputComponent={
                    <Input
                      type="password"
                      variant={errors.checkPw ? 'error' : 'default'}
                      placeholder="다시 한 번 입력해주세요."
                      {...field}
                    />
                  }
                  onResetValue={() => field.onChange('')}
                />
              )}
            />
          </div>
          <div className="mt-9">
            <Button
              variant={!isDirty || !isValid ? 'default' : 'primary'}
              disabled={!isDirty || !isValid}
              text="시작하기"
              size="large"
              width="w-full"
              type="submit"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default Signup;
