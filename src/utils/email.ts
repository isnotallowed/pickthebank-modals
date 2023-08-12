export const checkIsEmailValid = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export enum EmailDomainEnum {
  MAIL_RU = 'mail.ru',
  GMAIL_COM = 'gmail.com',
}

export const getEmailDomain = (email: string): EmailDomainEnum | null => {
  const parts = email.split('@')
  const domain = parts[1].toLowerCase()
  switch (domain) {
    case EmailDomainEnum.MAIL_RU:
      return EmailDomainEnum.MAIL_RU
    case EmailDomainEnum.GMAIL_COM:
      return EmailDomainEnum.GMAIL_COM
    default:
      return null
  }
}
