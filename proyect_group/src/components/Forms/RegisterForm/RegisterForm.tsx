import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button/Button";
export default function RegisterForm() {

    return (
        <>
            <form className="">
                <h2 className="">Register</h2>
                <label htmlFor="">User name</label>
                <Input
                    type="text"
                    placeholder="Username"
                    className=""
                />
                <label htmlFor="">Email</label>
                <Input
                    type="email"
                    placeholder="Email"
                    className=""
                />
                <label htmlFor="">Password</label>
                <Input
                    type="password"
                    placeholder="Password"
                    className=""
                />
                <label htmlFor="">Confirm Password</label>
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    className=""
                />
                <Button/>
            </form>
        </>
    )
}