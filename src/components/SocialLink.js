const SocialLink = (props) => {
  const { href, className, styling } = props;
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={styling}>
        <i className={className}></i>
      </a>
    </li>
  );
};
export default SocialLink;
