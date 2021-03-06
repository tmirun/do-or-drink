import React from 'react'
import { Formik, FormikProps, Field, ErrorMessage, FormikActions } from 'formik';
import * as Yup from 'yup';

import './Card.scss';

export type CardStatus = 'add' | 'edit' | 'next';

interface CardProps {
  status: CardStatus;
  text?: string;
  onSubmit?: (text: string, formikActions: FormikActions<CardFormValues>) => void;
}

export interface CardFormValues {
  text: string;
}

const MIN_TEXT_LENGHT = 4;
const MAX_TEXT_LENGHT = 140;

export const Card: React.FC<CardProps> = ({status = false, text = '', onSubmit}) => {
  
  const initValue: CardFormValues = { text };
  
  const onSubmitHandle = (values: CardFormValues, formikActions: FormikActions<CardFormValues>) => {
    if(onSubmit){
      onSubmit(values.text, formikActions);
    }
  }

  return (
    <Formik
      isInitialValid
      enableReinitialize
      initialValues={initValue}
      onSubmit={onSubmitHandle}
      validationSchema = {Yup.object().shape({
        text: Yup.string().required('required')
                          .min(MIN_TEXT_LENGHT, 'introduce more character')
                          .max(MAX_TEXT_LENGHT, 'max 140 characters')
      })}
      render = {(props: FormikProps<CardFormValues>) => (
        <form className={`Card Card--${status}`} onSubmit={(props.handleSubmit)}>
          <Field component="textarea" name="text" placeholder="enter some text, ex: Tell me a secret" 
                 disabled={(status === 'next')} className="Card__text"/>
          <ErrorMessage name="text">
            {msg => <div className='Card__error'>{msg}</div>}
          </ErrorMessage>
          <button className="btn" type="submit"> {status} </button>
        </form>
      )}
    />
    )
}