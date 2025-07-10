import Button from "@/components/ui/Button/Button"
import Input from "@/components/ui/Input/Input"

export default function loginform() {
    return (
        <>
            <h2 className="">Login</h2>
            <form className="">
                <label htmlFor="">User name</label>
                <Input
                />
                <label htmlFor="">Password</label>
                <Input
                />
                <Button />
            </form>
        </>
    )
}