const Button = (props) => {
  let { href, children, ...pageProps } = props;
  return (
    <div {...pageProps}>
      <div className="px-4 py-3 text-center text-white bg-gray-900 rounded">
        {children}
      </div>
    </div>
  );
};

export default Button;
