import { useTranslation } from 'react-i18next';

export const NewLot = () => {
  const { t } = useTranslation();

  return <div>{t('newLot')}</div>;
};
