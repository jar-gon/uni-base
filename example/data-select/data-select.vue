<template>
  <view>
    <uni-card :is-shadow="false" is-full>
      <text class="uni-h6">通过数据驱动的单选框和复选框，可直接通过连接 uniCloud 获取数据，同时可以配合表单组件 uni-forms 使用</text>
    </uni-card>

    <uni-section title="可搜索" type="line">
      <view class="uni-px-5 uni-pb-5">
        <zxz-uni-data-select v-model="value" filterable :localdata="range" @change="change"></zxz-uni-data-select>
      </view>
    </uni-section>
    <uni-section title="可搜索基础多选" type="line">
      <view class="uni-px-5 uni-pb-5">
        <zxz-uni-data-select v-model="value1" filterable multiple dataKey="label" dataValue="value" :localdata="data" @change="change"></zxz-uni-data-select>
      </view>
    </uni-section>
    <uni-section title="基础多选" type="line">
      <view class="uni-px-5 uni-pb-5">
        <zxz-uni-data-select v-model="value1" multiple dataKey="label" dataValue="value" :localdata="data" @change="change"></zxz-uni-data-select>
      </view>
    </uni-section>
    <uni-section title="基础多选(合并)" type="line">
      <view class="uni-px-5 uni-pb-5">
        <zxz-uni-data-select v-model="value1" collapse-tags multiple dataKey="label" dataValue="value" :localdata="data" @change="change"></zxz-uni-data-select>
      </view>
    </uni-section>
    <uni-section title="基础多选(可通过collapse-tags-num设置超过数量省略)" type="line">
      <view class="uni-px-5 uni-pb-5">
        <zxz-uni-data-select
          v-model="value1"
          collapse-tags
          :collapse-tags-num="3"
          multiple
          dataKey="label"
          dataValue="value"
          :localdata="data"
          @change="change"
        ></zxz-uni-data-select>
      </view>
    </uni-section>
    <uni-section title="自定义数据" type="line">
      <view class="uni-px-5 uni-pb-5">
        <zxz-uni-data-select v-model="value" dataKey="label" dataValue="value" :localdata="data" @change="change"></zxz-uni-data-select>
      </view>
    </uni-section>
    <uni-section title="配置左侧标题" type="line">
      <view class="uni-px-5 uni-pb-5">
        <zxz-uni-data-select v-model="value" :localdata="range" @change="change" label="应用选择"></zxz-uni-data-select>
      </view>
    </uni-section>
    <uni-section title="本地数据" type="line">
      <view class="uni-px-5 uni-pb-5">
        <zxz-uni-data-select v-model="value" :localdata="range" @change="change"></zxz-uni-data-select>
      </view>
    </uni-section>
    <uni-section title="禁用状态" type="line">
      <view class="uni-px-5 uni-pb-5">
        <zxz-uni-data-select v-model="value" :disabled="true" :localdata="range"></zxz-uni-data-select>
      </view>
    </uni-section>
    <!-- 	<uni-section title="云端数据" subTitle="连接云服务空间, 且存在相关的数据表才能生效(此处演示, 未连接云服务空间, 故不生效, 且有报错)" type="line">
			<zxz-uni-data-select collection="opendb-app-list" field="appid as value, name as text" v-mode="value" />
		</uni-section> -->
    <uni-section title="是否可清除已选项" type="line">
      <view class="uni-px-5 uni-pb-5">
        <zxz-uni-data-select v-model="value" :localdata="range" @change="change" :clear="false"></zxz-uni-data-select>
      </view>
    </uni-section>

    <view class="" style="height: 300rpx; width: 100%"></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      value1: ['选项1', '选项2'],
      value2: '',
      range: [
        {
          value: 0,
          text: '篮球',
          disable: true,
        },
        {
          value: 1,
          text: '足球',
        },
        {
          value: 2,
          text: '游泳',
        },
      ],
      data: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
        {
          value: '选项6',
          label: '豆腐',
        },
        {
          value: '选项7',
          label: '油条',
        },
      ],
    };
  },
  watch: {
    value1(newval) {
      console.log('newval', newval);
    },
  },
  created() {
    setTimeout(() => {
      // this.data = []
      this.value1.push('选项7');
      this.data.push({
        value: '选项8',
        label: '拉面',
      });
    }, 1000);
  },
  methods: {
    change(e) {
      // console.log('e:', e);
    },
  },
};
</script>

<style lang="scss">
.uni-px-5 {
  padding-left: 10px;
  padding-right: 10px;
}

.uni-pb-5 {
  padding-bottom: 10px;
}
</style>
