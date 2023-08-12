import MailIcon from '@/components/icons/MailIcon'
import GoogleIcon from '@/components/icons/GoogleIcon'
import FacebookIcon from '@/components/icons/FacebookIcon'
import React, { useMemo, useState } from 'react'
import { Button } from '@/components/elements/Button'
import { useShowModal } from '@/usecases/modals'
import { checkIsEmailValid } from '@/utils/email'
import { Input } from '@/components/elements/Input'

export const SignUpModalContent = () => {
  const { showSignUpSuccessModal } = useShowModal()
  const [email, setEmail] = useState('')
  const isEmailValid = useMemo(() => {
    return checkIsEmailValid(email)
  }, [email])

  return (
    <div className="bg-white w-full h-screen sm:h-max sm:w-[660px] md:w-[480px] lg:w-[604px] flex flex-col items-center text-center">
      <div className="max-w-[364px]">
        <h2 className="text-3xl font-bold text-darkBlue">
          Sign up to our monthly deposits overview!
        </h2>
        <p className="text-base text-[#506392] mt-4">
          ⚡️ Stay updated of the highest rates!
        </p>
        <Input
          placeholder="Enter your email"
          value={email}
          onChange={setEmail}
          className="mt-6"
        />
        <Button
          text="Sign up with email"
          onClick={() => {
            showSignUpSuccessModal(email)
          }}
          className="w-full mt-3"
          icon={<MailIcon />}
          disabled={!isEmailValid}
        />
        <div className="flex flex-row items-center gap-3 mt-4">
          <span className="block flex-grow h-[1px] bg-[#E4E7F0]" />
          <p className="text-[#97A2BE]">or</p>
          <span className="block flex-grow h-[1px] bg-[#E4E7F0]" />
        </div>
        <Button
          text="Continue with Google"
          onClick={() => {}}
          className="w-full mt-3 font-medium"
          icon={<GoogleIcon />}
          twig="white"
        />
        <Button
          text="Continue with Facebook"
          onClick={() => {}}
          className="w-full mt-3 font-medium"
          icon={<FacebookIcon />}
          twig="white"
        />
        <p className="text-[15px] text-grey-500 mt-4">
          By creating an account you agree to our <a href="#">Terms of use,</a>{' '}
          <a href="#">Privacy policy</a> and give consent to{' '}
          <a href="#">Personal data processing</a>
        </p>
      </div>
    </div>
  )
}
