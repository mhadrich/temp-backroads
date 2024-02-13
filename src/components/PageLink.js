const PageLink = (props) => {
  const {id, href, text, className} =props
  return (
    <li key={id}>
      <a href={href} className={className}>
        {text}
      </a>
    </li>
  );
}
export default PageLink