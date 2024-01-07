import PropTypes from 'prop-types';

export default function ServiceHeader({ title, description }) {
  return (
    <>
      <div className="flex flex-col justify-evenly items-center h-44">
        <h1 className="text-h2 font-main">{title}</h1>
        <span className="-mt-10 text-green2 text-h2">━━━</span>
        <p className="px-10 md:px-10">
          {description}
        </p>
      </div>
    </>
  );
}

ServiceHeader.propTypes = {
  title: PropTypes.string.isRequired, // Validates title prop as a required string
  description: PropTypes.string.isRequired, // Validates description prop as a required string
};
