import React, { FC, useMemo } from 'react'
import Image from 'next/image'
import { Button } from '@/components/elements/Button'
import { useModal } from '@/contexts/ModalContext'
import { EmailDomainEnum, getEmailDomain } from '@/utils/email'

interface SignUpSuccessModalContentProps {
  email: string
}
export const SignUpSuccessModalContent: FC<SignUpSuccessModalContentProps> = ({
  email,
}) => {
  const { closeModal } = useModal()

  const renderedFooter = useMemo(() => {
    const domain = getEmailDomain(email)
    switch (domain) {
      case EmailDomainEnum.MAIL_RU:
        return (
          <>
            <p className="text-grey-800 mt-4">
              Емеил отправлен на вашу почту
              <span className="text-darkBlue font-semibold"> {email}</span>
            </p>
            <a href="https://mail.ru" target="_blank">
              <Button
                text="Go to mail.ru"
                className="px-14 mt-6"
                twig="secondary"
              />
            </a>
          </>
        )
      case EmailDomainEnum.GMAIL_COM:
        return (
          <p className="text-grey-800 mt-4">
            Курс валюты EUR/USD 1EUR = 1,10USD
          </p>
        )
      default:
        return (
          <>
            <p className="text-grey-800 mt-4">
              We’ve sent a confirmation link to{' '}
              <span className="text-darkBlue font-semibold">{email}</span>.
              Click the link to log in.
            </p>
            <Button
              text="Continue"
              className="px-14 mt-6"
              twig="secondary"
              onClick={closeModal}
            />
          </>
        )
    }
  }, [closeModal, email])

  return (
    <div className="bg-white w-full h-full min-h-screen sm:min-h-full sm:h-max sm:w-[660px] md:w-[480px] lg:w-[604px] flex flex-col items-center text-center">
      <div className="max-w-[508px] flex items-center flex-col">
        <Image
          alt="envelope"
          src="/images/envelope.png"
          width={128}
          height={128}
        />
        <h2 className="text-3xl font-bold mt-4 text-darkBlue">
          Confirm your e-mail address
        </h2>
        {renderedFooter}
      </div>
    </div>
  )
}
