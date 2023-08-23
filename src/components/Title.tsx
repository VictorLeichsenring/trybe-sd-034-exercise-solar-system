type HeadlineProp = {
  headline: string,
};

function Title({ headline }: HeadlineProp) {
  return <h2>{ headline }</h2>;
}
export default Title;
