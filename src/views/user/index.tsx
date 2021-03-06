import { login, register } from 'apis/cinejump'
import RoundedButton from 'components/RoundedButton'
import TextInput from 'components/TextInput'
import { Assets } from 'helpers/assets'
import { errorMessagesValidation } from 'helpers/string'
import { RenderAToast } from 'helpers/toast'
import useAuth, { TokenInterface } from 'hooks/useAuth'
import useForm, { Form } from 'hooks/useForm'
import { StrObjectAny } from 'interfaces'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PrimaryContent from './components/primaryContent'
import SecondaryContent from './components/secondaryContent'
import {
  BaseStyled,
  CenterVerticalContentStyled,
  ImageLogo,
  RowDivStyled,
  SubTitleStyled,
  TitleStyled
} from './styles'

type PageFunctionalityType = 'login' | 'register'

interface LoginFormProps {
  name: string
  email: string
  password: string
}

const User: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const { setToken } = useAuth()
  const [pageFunctionality, setPageFunctionality] =
    useState<PageFunctionalityType>('login')

  const isLoginActive = () => pageFunctionality === 'login'

  const initialFields: LoginFormProps = {
    name: '',
    email: '',
    password: ''
  }

  const handleChangePageFunctionality = () => {
    setErrors({})
    setFields(initialFields)
    setPageFunctionality(isLoginActive() ? 'register' : 'login')
  }

  const renderSecondarySubContent = (
    title: string,
    subtitle: string,
    textButton: string,
    onClickButton: React.MouseEventHandler<HTMLButtonElement>
  ) => {
    return (
      <CenterVerticalContentStyled>
        <TitleStyled color="white" fontWeight={500}>
          {title}
        </TitleStyled>
        <SubTitleStyled>{subtitle}</SubTitleStyled>
        <RoundedButton onClickButton={onClickButton} textButton={textButton} />
      </CenterVerticalContentStyled>
    )
  }

  const secondaryChildrenByFunctionality = () => {
    return (
      <BaseStyled justifyContent="space-evenly">
        {isLoginActive()
          ? renderSecondarySubContent(
              'Ol??, visitante!',
              'Cadastre-se e conhe??a as vantagens do Cinejump.',
              'CRIAR CONTA',
              handleChangePageFunctionality
            )
          : renderSecondarySubContent(
              'Bem-vindo, Jumper!',
              'Para se manter conectado, fa??a login com suas credenciais.',
              'LOGIN',
              handleChangePageFunctionality
            )}
      </BaseStyled>
    )
  }

  const processToken = (data: TokenInterface) => {
    setToken(data)
    localStorage.setItem('token', JSON.stringify(data))
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    if (validate()) {
      setLoading(true)
      const { name, email, password } = fields
      let submitReturnApi
      if (isLoginActive()) {
        submitReturnApi = login({ email: email, password: password })
        submitReturnApi
          .then((data: StrObjectAny) => {
            if (data) {
              processToken({ token: data.token, authenticated: true })
              localStorage.setItem('user', JSON.stringify(data.user))
              RenderAToast('success', `Welcome, ${data.user.name.split(' ')[0]}.`)
              navigate('/home')
            }
          })
          .finally(() => setLoading(false))
      } else {
        submitReturnApi = register({ name: name, email: email, password: password })
        submitReturnApi
          .then((data: StrObjectAny) => {
            if (data) {
              RenderAToast('success', 'User registered successfully.')
              setPageFunctionality('login')
            }
          })
          .finally(() => setLoading(false))
      }
    }
  }

  const validationIsValid = (data: string) => Object.values(data).every((x) => x === '')

  const validate = (fieldValues = fields) => {
    const temp: any = { ...errors }
    if (!isLoginActive() && 'name' in fieldValues) {
      temp.name = errorMessagesValidation(fieldValues.name, 4)
    }
    if ('email' in fieldValues) {
      temp.email = errorMessagesValidation(fieldValues.email, 14, true)
    }
    if ('password' in fieldValues) {
      temp.password = errorMessagesValidation(fieldValues.password, 1)
    }

    setErrors({ ...temp })
    return fieldValues === fields && validationIsValid(temp)
  }

  const { fields, setFields, errors, setErrors, handleInputChange } = useForm({
    initialFields,
    validateOnChange: false,
    validate
  })

  const renderPrimarySubContent = (title: string, textButton: string) => {
    return (
      <CenterVerticalContentStyled>
        <TitleStyled color="#E83F5B" fontWeight={400}>
          {title}
        </TitleStyled>
        <Form onSubmit={handleSubmit} autoComplete>
          {!isLoginActive() ? (
            <TextInput
              name="name"
              value={fields.name}
              onChange={handleInputChange}
              height={72}
              width={530}
              addorment
              InputProps={{
                placeholder: 'Nome',
                inputProps: { maxLength: 100 }
              }}
              error={errors.name}
            />
          ) : null}
          <TextInput
            name="email"
            value={fields.email}
            onChange={handleInputChange}
            height={72}
            width={530}
            addorment
            InputProps={{
              placeholder: 'E-mail',
              inputProps: { maxLength: 100 }
            }}
            error={errors.email}
          />
          <TextInput
            name="password"
            value={fields.password}
            onChange={handleInputChange}
            height={72}
            width={530}
            addorment
            InputProps={{
              placeholder: 'Senha',
              type: 'password',
              inputProps: { maxLength: 100 }
            }}
            error={errors.password}
          />
          <RoundedButton type="submit" textButton={textButton} isLoading={loading} />
        </Form>
      </CenterVerticalContentStyled>
    )
  }

  const primaryChildrenByFunctionality = () => {
    return (
      <BaseStyled justifyContent="space-around">
        <ImageLogo src={Assets('assets/images/Logo-red.svg')} />
        {isLoginActive()
          ? renderPrimarySubContent('Login', 'ENTRAR')
          : renderPrimarySubContent('Criar conta', 'CADASTRAR')}
      </BaseStyled>
    )
  }

  return (
    <RowDivStyled>
      {isLoginActive() ? (
        <>
          <PrimaryContent children={primaryChildrenByFunctionality()} />
          <SecondaryContent children={secondaryChildrenByFunctionality()} />
        </>
      ) : (
        <>
          <SecondaryContent children={secondaryChildrenByFunctionality()} />
          <PrimaryContent children={primaryChildrenByFunctionality()} />
        </>
      )}
    </RowDivStyled>
  )
}

export default User
