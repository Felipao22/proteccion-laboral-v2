import { useRouter } from "../../hooks/useRouter";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children, ...restOfProps }: LinkProps) {
  const { navigateTo } = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigateTo(href);
  };

  return (
    <a href={href} {...restOfProps} onClick={handleClick}>
      {children}
    </a>
  );
}
