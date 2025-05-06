type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className, ...rest }: ButtonProps) {
  return (
    <button
      className={
        "cursor-pointer rounded bg-slate-900 px-7.5 py-2.5 text-white duration-300 hover:opacity-90 " +
        className
      }
      {...rest}
    />
  );
}
