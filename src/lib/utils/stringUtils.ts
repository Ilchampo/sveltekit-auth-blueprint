export const censoredEmail = (email: string): string => {
  if (!email) {
    return '';
  }
  const [username, domain] = email.split('@');
  return `${username.slice(0, 2)}***@${domain}`;
};
