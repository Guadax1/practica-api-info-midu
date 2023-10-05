

const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '02799a11f9mshd4c05a73aef3eb0p11a13ejsn63cf668a6961',
		'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com'
	}
};

export const fetchIpInfo = ( ip ) => {
  return fetch(`https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/?ip=${ip}`, OPTIONS )
    .then( res => res.json() )
    .catch( err => console.error( err )  )
}