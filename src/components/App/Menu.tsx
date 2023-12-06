import { EditCalendar, List } from '@mui/icons-material';
import { Avatar, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { ISection } from 'models/sections';
import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { signOut } from 'store/auth/auth.actions';
import { selectCurrentUser } from 'store/auth/auth.selector';
import { useAppDispatch, useAppSelector } from 'store/store';

interface IMenuProps {
  section: ISection;
  setSection: Dispatch<SetStateAction<ISection>>;
}

export const Menu = ({ section, setSection }: IMenuProps) => {
  const { t } = useTranslation();

  const currentUser = useAppSelector(selectCurrentUser)!;

  const dispatch = useAppDispatch();

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation showLabels value={section} onChange={(_event, newValue) => setSection(newValue)}>
        <BottomNavigationAction value="yourLots" label={t('yourLots')} icon={<List />} />
        <BottomNavigationAction value="newLot" label={t('newLot')} icon={<EditCalendar />} />
        <BottomNavigationAction
          label={t('signOut')}
          onClick={() => dispatch(signOut())}
          icon={<Avatar style={{ width: '24px', height: '24px' }} alt="User Avatar" src={currentUser.photoURL} />}
        />
      </BottomNavigation>
    </Paper>
  );
};
