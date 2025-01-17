import forestWardenBanner from '../assets/forest_warden.png';

export function Main() {
    return (
        <div className="flex flex-col items-center place-content-around">
            <img
                src={forestWardenBanner}
                className="w-full h-auto md:w-4/5" // Adjust these values as needed
                alt="Forest Warden Banner"
            />
            <div className="text-white font-roboto">Coming soon</div>
        </div>
    );
}
