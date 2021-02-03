import React, { useState } from "react";
import { DatePicker, TimePicker, Input, Space, Button } from "antd";
import { EditTwoTone } from "@ant-design/icons";
import moment from "moment";

const TicketTime = (props) => {
  const [date, setDate] = useState(moment().format("MM/DD/YYYY"));
  const [time, setTime] = useState();
  const [activity, setActivity] = useState("");

  const format = "HH:mm";

  console.log(props.ticket);

  function onChangeDate(date, dateString) {
    const d = moment(date).format("MM/DD/YYYY");
    setDate(d);
  }

  function onChangeTime(time) {
    const t = time;
    const m = moment(t).format("hh:mm");
    setTime(m);
  }

  async function postData() {
    await fetch(`/api/v1/time/createTime`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        ticket: props.ticket._id,
        date,
        time,
        activity,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log("Congrats it worked");
        }
      });
  }

  return (
    <div>
      <Space>
        <DatePicker onChange={onChangeDate} defaultValue={moment} />
        <TimePicker format={format} onChange={onChangeTime} />
        <Input
          style={{ width: 300 }}
          placeholder="Enter activity here"
          onChange={(e) => setActivity(e.target.value)}
        />
        <Button onClick={postData}>
          <EditTwoTone />
        </Button>
      </Space>
    </div>
  );
};

export default TicketTime;