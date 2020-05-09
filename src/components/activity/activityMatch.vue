<template>
    <div class="activityMatch">
        <div class="activityMatch-bar">
            <!-- <el-card class="activityMatch-bar__card">
                <span class="title">作者头像&简介</span>
            </el-card> -->
        </div>
        <div class="activityMatch-content">
            <el-card class="activityMatch-content__card">
                <div slot="header" class="clearfix">
                    <span class="title">【征稿启事】第四届“诗词中国”传统诗词创作大赛</span>
                    <span class="source">来源：诗词中国</span>
                </div>
                <div class="content text item">
                    <span class="til">一、 参赛对象</span><br>
                        不限年龄、不限国籍、不限性别，均可参赛。<br>
                    <span class="til">二、投稿方式</span><br>
                    1、官方网站<br>
                    登录诗词中国官网（http://www.shicizhongguo.com/），注册后即可投稿。<br>
                        注册方法：打开诗词中国官网（http://www.shicizhongguo.com/）， 点击“注册”链接，使用手机号码注册，注册成功后，点击“参赛投稿”栏目，即可进入投稿页面，按照提示输入您的作品即可投稿。<br>
                    2、诗词中国APP<br>
                        通过登录诗词中国官网（http://www.shicizhongguo.com/），或通过手机登录百度手机助手、华为应用市场、应用宝、360手机助手，搜索“诗词中国”进行下载并安装，登录“参赛平台”。参赛者需以手机号码进行注册上传诗词作品参与本次活动。<br>
                    3、诗词中国微信<br>
                        “诗词中国”公众号上传：关注诗词中国官方微信“诗词中国”（微信公众号：shicizg），点击“我要参赛”，注册后根据类别即可投稿。<br>
                    4、海外作品上传<br>
                        海外参赛者以邮件方式发送至活动指定邮箱haiwaitougao@sina.com，上传原创诗词作品。
                        请在邮件标题注明：所在国家+姓名+联系电话+地址；邮件正文处注明：作品体裁+作品题目+作品内容。<br>
                        以上信息全部使用中文。<br>
                    <span class="til">三、参赛作品要求</span><br>
                    1、体裁：要求参赛作品均为原创的传统诗词作品，具体体裁为绝句、律诗、词、古风。<br>
                    2、要求参赛作品必须为本人原创的古近体诗词作品，剽窃必究，但不要求作品首次发表或投稿。发送参赛作品的手机号将作为组委会联系作者的唯一联系方式。投稿作品请勿填写姓名。<br>
                    <span class="til">四、赛程安排</span><br>
                    1、征集：<br>
                        本赛于2018年11月20日开始接受参赛作品，至2019年3月31日24点结束征集。<br>
                    2、评审：<br>
                        初、复审：2018年11月至2019年4月<br>
                        终审：2019年7月<br>
                    3、投票：2019年5月至6月<br>
                    4、颁奖：2019年10月<br>
                        (此安排为赛程计划，各阶段具体时间请以官网最新活动公告为准)<br>
                    <span class="til">五、评审办法</span><br>
                    1、本次大赛将通过群众投票和专家评审两种方式相结合评选优秀诗词作品。<br>
                    2、所有参赛作品将通过初审、复审、终审三个阶段的选拔，并于2019年5月向全社会公示复审结果，接受大众监督和投票。<br>
                    3、大赛将按照绝句、律诗、词、古风四个组分别评选，最后将评选出优秀作品，由中华书局结集出版。<br>
                    4、评审的最终解释权在大赛组委会。<br>
                    <span class="til">六、收费标准</span><br>
                        诗词中国会对每一首投稿诗词作品进行三次审读。为高效使用评审资源，防止恶意投稿，每个注册用户可免费投稿参赛诗词作品1首（请选择最优作品，不限是否首发），请投稿者珍惜投稿机会。<br>
                        第二首起象征性征收评审费2元/首，接受每个注册用户的最高投稿数量为16首，超过16首后的投稿无效。用户付费后作品即进入评审状态，不退还费用。<br>
                    <span class="til">七、参赛作品的发表平台</span><br>
                    1、参赛作品经评审后认可的，由“诗词中国”客户端及大赛官网发表；<br>
                    2、最终获奖的优秀作品将由中华书局结集出版。<br>
                    <span class="til">八、参赛智慧支持</span><br>
                    1、中华书局“诗词中国.中华传统诗词经典”系列丛书：《诗词写作常识》、《诗词格律》、《怎样用韵》、《怎样赏诗》、《唐诗三百首》、《宋词三百首》、《李白诗》、《杜甫诗》、《白居易诗》、《苏轼词》、《辛弃疾词》、《柳永词》、《李商隐诗》等。<br>
                    2、手机下载并注册“诗词中国”手机客户端，查看“诗词大全”和“写作常识”栏目。<br>
                    3、在 “诗词中国”官方网站查看诗词普及知识。
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.activityMatch {
    margin-top: 71px!important;
    padding-top: 20px;
    padding-bottom: 40px;
    width: 900px;
    margin: 10px auto;
    &-bar {
        padding: 0 20px;
        &__card {
            margin: 20px;
        }
    }
    &-content {
        padding: 0 20px;
        .layout {
            display: flex;
            align-items: stretch;
            padding-bottom: 40px;// 因为card高度100%失去了间距
        }
        &__card {
            height: 100%;
            margin: 20px;
            .title {
                padding: 14px 10px 0 10px;
                font-size: 20px;
            }
            .source {
                font-size: 12px;
                color: rgb(140, 16, 56);
            }
            .content{
                font-family: SimSun;
                line-height: 26px;
            }
            .text {
                font-size: 16px;
            }
            .item {
                margin-bottom: 18px;
            }
            .til{
                line-height: 30px;
                font-weight: 600;
            }
            .clearfix:before,
            .clearfix:after {
                display: table;
                content: "";
            }
            .clearfix:after {
                clear: both
            }
        }
    }
}
</style>
