import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';

interface LocalizedLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
  children: React.ReactNode;
}

export const LocalizedLink: React.FC<LocalizedLinkProps> = ({ to, children, ...props }) => {
  const { getLocalizedPath } = useLanguage();

  // Handle root path
  const localizedTo = to === '/' ? getLocalizedPath('') : getLocalizedPath(to);

  return (
    <Link to={localizedTo} {...props}>
      {children}
    </Link>
  );
};
