export default function Error({ children }: { children: React.ReactNode }) {

    return (
        <p
            className="text-center my-4 bg-alertColor text-white font-bold p-3 uppercase text-sm"
        >
            {children}
        </p>
    )
}