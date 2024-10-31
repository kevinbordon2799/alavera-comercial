export default function AlaveraGoogleMap() {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6947.153375440354!2d-60.201673!3d-29.470368999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94495ffa48407acf%3A0x83cf9a3010e7af1e!2sPres.%20Juan%20Domingo%20Per%C3%B3n%20702%2C%20Vera%2C%20Santa%20Fe%2C%20Argentina!5e0!3m2!1ses-419!2sus!4v1670222308589!5m2!1ses-419!2sus"
            width="800"
            height="600"
            style={{
                position: "relative",
                zIndex: "20",

                width: "100%",
                height: "100%",
                border: "none",
            }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    );
}
