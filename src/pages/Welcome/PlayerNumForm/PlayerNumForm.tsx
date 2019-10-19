import React from 'react'
import { Formik, FormikProps, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './PlayerNumForm.scss';

type PlayerNumFormValues = {
  playerNum: number;
}

export const PlayerNumForm: React.FC = () => {
  const initValues: PlayerNumFormValues = {
    playerNum: 0
  }

  const onSubmit = (...arg: any[]) => {
  }

  return(
    <div className="PlayerNumForm">
      <Formik 
        initialValues={initValues}
        onSubmit={onSubmit}
        validationSchema = { Yup.object().shape({
          playerNum: Yup.number().moreThan(0, 'Player must be more than 0 ')
        })}
        render={(props: FormikProps<PlayerNumFormValues>) => (
          <form onSubmit={(props.handleSubmit)}>
            <Field type="number" name="playerNum" placeholder="Player number"  className="PlayerNumForm__input"/>
            <ErrorMessage name="playerNum"/>
            <button type="submit"> SUBMIT </button>
          </form>
        )}
      />
    </div>
  );
}