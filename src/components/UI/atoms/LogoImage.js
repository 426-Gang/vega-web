import logoimage from "../../../assets/images/logo.png";
const LogoImage = (props) => {
	return (
		<div className="row">
			<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
				<img
					alt=""
					className="img-fluid"
					src={logoimage}

				/>
			</div>
		</div>
		);
}
export default LogoImage;