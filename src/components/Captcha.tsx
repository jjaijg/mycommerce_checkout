

type CaptchaProps = {
    value: string;
    onChange: (value: string) => void;
}

const Captcha = ({value, onChange}: CaptchaProps) => {
  return (
    <div>
      <input
        type="text"
        aria-label="Enter Captcha"
        placeholder="Enter Captcha"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <br />
      <pre>123456</pre>
    </div>
  );
};

export default Captcha;
