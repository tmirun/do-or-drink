import React from 'react'
import { Formik, FormikProps, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { setPlayerNum } from '../../../actions/playerNum.actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { ROUTE_PREPARATION_PATH } from '../../../AppRoutes';

import './PlayerNumForm.scss';

interface PlayerNumFormValues {
  playerNum: number;
}

export const PlayerNumForm: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory();

  const initValues: PlayerNumFormValues = { playerNum: 0 }

  const onSubmit = (values: PlayerNumFormValues) => {
    console.log('test');
    dispatch(setPlayerNum(values.playerNum));
    history.push(ROUTE_PREPARATION_PATH);
  }
  return(
    <Formik
      initialValues={initValues}
      onSubmit={onSubmit}
      validationSchema = { Yup.object().shape({
        playerNum: Yup.number().required().moreThan(2, 'Player must be more than 2')
      })}
      render={(props: FormikProps<PlayerNumFormValues>) => (
        <form className="PlayerNumForm" onSubmit={(props.handleSubmit)}>
          <Field type="number" name="playerNum" placeholder="Player number"/>
          <ErrorMessage name="playerNum">
            {msg => <div className='PlayerNumForm__error'>{msg}</div>}
          </ErrorMessage>
          <button className="btn" type="submit"> next &rarr; </button>
        </form>
      )}
    />
  );
}