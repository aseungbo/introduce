interface TitleProps {
  title: string;
}

const Title = (props: TitleProps): JSX.Element => {
  const { title } = props;
  return <p className="p-4 text-5xl font-bold text-green-600">{title}</p>;
};

export default Title;
