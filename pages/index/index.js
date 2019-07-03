Page({
  data: {
    value: ''
  },
  handleChange: function(event) {
    let value = event.detail.value;
    this.setData({ value })
  },
  handleSubmit: function() {
    let value = this.data.value;
    console.log(wx.showToast)
    if(!value){
      wx.showToast({
        icon: 'none',
        title: '请输入快递号'
      })
    }else{
      let url = `/pages/logs/logs?order_id=${value}`;
      wx.navigateTo({ url });
    }
  },
  handleScancode: function() {
    wx.scanCode({
      success (res) {
        let order_id = res.result;

        order_id = order_id.trim();
        let url = `/pages/logs/logs?order_id=${order_id}`;
        wx.navigateTo({ url });
      }
    })
  }
})