import { CircularProgress } from '@mui/material';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import { selectIsLoginLoading } from 'store/auth/auth.selector';

import { signIn } from '../../store/auth/auth.actions';
import { useAppDispatch, useAppSelector } from '../../store/store';
import styles from './Login.module.scss';

export const Login = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const loading = useAppSelector(selectIsLoginLoading);

  if (loading) {
    return (
      <div className={styles.container}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Button className={styles.signIn} variant="contained" onClick={() => dispatch(signIn())}>
        {t('signInWith', { provider: 'Google' })}
      </Button>
    </div>
  );
};
