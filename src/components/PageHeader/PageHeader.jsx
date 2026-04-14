import CloseSideBarMenu from "../../components/Menu/CloseSideBarMenu"
import ConnectCalender from "./ConnectCalender/ConnectCalender"
import { Display } from "./Display/Display"

export const PageHeader = () => {
    return(
        <div className="flex justify-between h-14">
            <div>
                <CloseSideBarMenu/>
            </div>
            <div className="flex items-center pr-3 gap-[2px]">
                <ConnectCalender/>
                <Display />
            </div>
        </div>
    )
}