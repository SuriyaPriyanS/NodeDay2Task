
const booking = [

    {roomId: 1, customer_name: "suriya", date: "20-05-2024", stattime: "10:00:00",endtime: "2:00:00",bookingStatus:"confirmed"}

];


export const getBookingDetail = (req,res)=>{
    res.status(200).json({data:booking});
};

export const getBookingDetaildByid = (req,res)=>{
   const roomid = req.params.id;
   console.log(roomid);

   const bookinDetail = booking.find((ele)=>ele.id == roomid);
   if(!bookinDetail){
    return res.status(400).send("booking not found");
   }
   res.status(200).json({message: "booking Details", data: bookinDetail})
};

export const createRoom = (req,res)=>{
    const {customer_name, bookingStatus} = req.body;
    const newbooking = {
        id: booking.length + 1,
        customer_name: customer_name,
        bookingStatus: bookingStatus,
    };

    booking.push(newbooking);
    res.status(200).json({message: "created successfully" , data: newbooking})
};

export const editeDetails = (req,res)=>{
    const roomid = req.params.id;
    const {customer_name,bookingStatus}= req.body;
    const index = booking. findIndex((ele)=>ele.id == roomid);
    if(index === -1){
        return res.status(404).send("booking detail not found");
    }
    booking[index].customer_name = customer_name;
    booking[index].bookingStatus = bookingStatus;
    res.status(200).json({message: "Booking updated Successfully", data:booking[index]});
};

export const detelted = (req,res)=>{
    const roomid = req.param.id;
    const index = booking.findIndex((ele)=> ele.id == roomid);
    if(index === -1) {
        return res.status(404).send("booking details not found");
    }
    booking.splice(index, 1);
    res.status(200).json({message: "booking Deleted Successfully"});
};







