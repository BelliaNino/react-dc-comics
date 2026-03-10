export default function AppCard({ image, title }) {

    return (
        <div className="col-12 col-sm-6 col-md-3 col-lg-2 d-flex justify-content-center">
            <div className="card my-3">
                <img className="card-img-top rounded-0" src={image} alt="" />
                <div className="card-body p-0 text-start">
                    <p className="pt-3">{title.toUpperCase()}</p>
                </div>
            </div>
        </div>

    )
} 