// import { useNavigate } from 'react-router-dom';
import useImageUploader from '../hooks/useImageUploader';

const AddSafari = () => {
  // const navigate = useNavigate();
  const { imageURL, handleImageChange } = useImageUploader();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form
        className="w-full  mt-40 flex justify-center"
        onSubmit={handleSubmit}
      >
        <div className="lg:w-6/12 md:w-9/12 sm:w-full">
          <div className="flex flex-wrap -mx-10 mb-2">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
              >
                Name
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="name"
                  type="text"
                  name="safari[name]"
                  placeholder="Name"
                  required
                  minLength="2"
                />
              </label>
            </div>
          </div>
          <div className="flex flex-wrap -mx-10 mb-2">
            <div className="w-full px-3">
              {imageURL && <img src={imageURL} alt="Safari" />}
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="image"
              >
                Photo
                <input
                  className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="photo"
                  type="file"
                  placeholder="Photo"
                  name="safari[img]"
                  accept="image/*"
                  multiple={false}
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </div>
          <div className="flex flex-wrap -mx-10 mb-2">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="fee"
              >
                Price
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="type"
                  type="number"
                  placeholder="price"
                  name="safari[price]"
                  required
                />
              </label>
            </div>
          </div>
          <div className="flex flex-wrap -mx-10 mb-2">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="description"
              >
                Description
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight  resize-none focus:outline-none focus:bg-white"
                  id="description"
                  rows="5"
                  name="safari[description]"
                  placeholder="Description"
                  required
                  minLength="5"
                />
              </label>
            </div>
          </div>
          <div className="flex flex-wrap -mx-10 mb-2">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="location"
              >
                Location
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="location"
                  name="safari[location]"
                  type="text"
                  placeholder="Location"
                  required
                  minLength="2"
                />
              </label>
            </div>
          </div>
          <div className="flex flex-wrap -mx-10 mb-2 mt-4">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <button
                className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Add Safari
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddSafari;
