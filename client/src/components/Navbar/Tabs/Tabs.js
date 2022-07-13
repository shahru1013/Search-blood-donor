import Tabs from "@material-ui/core/Tabs"; 
import { withStyles } from "@material-ui/core/styles";

const style = {
    indicator : {
        backgroundColor  : "#CEB7BA",
    },
    root : {
        color : "#222"
    }
}
export default withStyles(style)(Tabs);
