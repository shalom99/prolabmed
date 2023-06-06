import { FC } from 'react'


type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,HTMLInputElement> & {
  id: string;
  label: string;
}

const Input: FC<InputProps> = ({
    id,
    label,
    ...props
}) => {
  return (
    <div className='w-full relative'>

           <input
                id={id}
                className="
                peer
                w-full
                p-4
                pt-6 
                font-light 
                bg-white 
                border-2
                rounded-md
                outline-none
                transition
                disabled:opacity-70
                disabled:cursor-not-allowed
                "
           
                {...props}

            />
            <label
                className='
                    absolute
                    text-md
                    duration-150
                    transform
                    -translate-y-3
                    left-4
                    top-5
                    z-10
                    origin-[0]
                    peer-placeholder-shown:scale-100 
                    peer-placeholder-shown:translate-y-0 
                    peer-focus:scale-75
                    peer-focus:-translate-y-4
                    text-zinc-400
                    '
            >
               {label}
            </label>
    </div>



)
}

export default Input