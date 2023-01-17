const readyForSchool = (cb) => {
  console.log("Ready for school at 8 am Brushed teeth and had breakfast.");
  cb(attendClass);

}

function sitOnBus(cb2) {
  console.log("Sitting on school bus Listened to music on the bus ride..");
  cb2(returnHome);
}

function attendClass(cb3) {
  console.log("Attending Classes Learned about math and science.");
  cb3();
}

function returnHome () {
  console.log("Returning Home Ate dinner and did homework.");
}

readyForSchool(sitOnBus)
