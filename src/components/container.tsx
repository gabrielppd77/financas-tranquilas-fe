type ContainerProps = React.HtmlHTMLAttributes<HTMLDivElement>;

export default function Container({ className, ...rest }: ContainerProps) {
  return (
    <div
      className={"mx-auto w-full max-w-[1520px] px-4 " + className}
      {...rest}
    />
  );
}
