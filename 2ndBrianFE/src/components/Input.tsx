interface InputProps {
    placeholder: string;
    reference?: any
}

export function Input({ placeholder, reference }: InputProps) {
    return <div>
        <input ref={reference} placeholder={placeholder} type={"text"} className="w-full bg-white px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition"></input>
    </div>
}