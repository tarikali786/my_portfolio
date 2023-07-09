import { SocialMediaIcons } from "../component/SocialMediaIcons";
export const Footer = () => {
  return (
    <>
      <footer className="h-64 bg-red mt-10 pt-10">
        <div className="w-10/12 mx-auto">
          <SocialMediaIcons />
          <div className="md:flex justify-center md:justify-between text-center ">
            <p className="font-playfair font-semibold text-2xl text-yellow">
              Tarik Ali
            </p>
            <p className="font-playfair text-md text-yellow">
              @2023. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
