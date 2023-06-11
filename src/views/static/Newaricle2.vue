<template>
  <div class="articleCats">
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
  <div class="title"><h1>知识库</h1></div>
    <div class="flex-grow" />
    <el-menu-item index="1"  @click="gouser()">用户端</el-menu-item>
    <el-sub-menu index="2">
      <template #title>文章管理</template>
      <el-menu-item index="2-1" @click="gofenlei()">文章分类</el-menu-item>
      <el-menu-item index="2-2" @click="addTask()">文章列表</el-menu-item>
    </el-sub-menu>
  </el-menu>
    <!-- 工具 -->
    <div class="article-tools">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item >
          <el-input
            v-model="formInline.title"
            placeholder="请输入关键词"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="Find">搜索</el-button>
          <!-- <el-button type="warning" @click="toAdd">添加</el-button> -->
        </el-form-item>
      </el-form>
    </div>
    <!-- 表格 -->
  <div class="detail">
    <el-table :data="articleCats" stripe style="width: 100%">
      <!-- 列定义 -->
      <el-table-column prop="title" label="文章标题" align="center" />
      <el-table-column  label="操作" >
        <template #default="scope">
          <el-button
            type="primary"
            size="small"
            @click="daohang(scope.row)" plain
            >查看</el-button>
        </template>
      </el-table-column>
    </el-table>
</div>
  </div>

  
  <el-dialog v-model="dialogFormVisible1" title="查看">
    <div style="width: 45vw; height: 100vh">
      <div class="title" style="font-size: 1.2vw; font-weight: bold; align=center ">
        {{ detailC.title }}
      </div>
      <div style="margin-top: 20px">更新时间{{ detailC.createTime }}</div>
      <div style="width: 40vw; margin-top: 20px">
        {{ detailC.content }}
      </div>
    </div>
  </el-dialog>
</template>
  
  <script>
import { defineComponent } from "vue";
import {
  ArticleCatPage,
  ArticleCatDelId,
  AddArticleCat,
  ArticleCatEdit,
  getOneArticleCat,
} from "../../http/articleCat5";
import { ElMessageBox, ElMessage } from "element-plus";
import { cloneDeep } from "lodash-es";

export default defineComponent({
  data() {
    return {
      value: "",
      detailC: {},
      current: 2,
      total: 100,
      size: 10,
      formInline: {},
      articleCats: [], // 数据
      page: {
        total: "100",
        current: 1,
        size: "10",
      }, // 分页数据
      dialogFormVisible: false, // 对话框是否可见
      dialogFormVisible1: false, // 对话框是否可见
      articleCat: {
        "articleCatId": 0,
        "content": "",
        "createTime": "",
        "deleted": 0,
        "id": 0,
        "open": 0,
        "title": "",
        "updateTime": "",
        "userinfoId": 0,
      }, // 当前编辑对象
      formLabelWidth: 98, // 表单标签宽度
    };
  },
  created() {},
  mounted() {
    this.getArticleCatsPage(1); // 组件加载时获取第一页数据
  },
  methods: {
    gouser(){
      this.$router.push({
        path: '/Newaricle2'
      })
    },
    gofenlei(){
      this.$router.push({
        path: '/Newaricle'
      })

    },
    addTask() {
      this.$router.push({
        path: '/Newaricle1'
      })
    },
    changeOption(val){
     console.log("切换了",val); 
     this.$router.push(
        {
            path:"/"+val
        }
     )
    },
    daohang(a) {
      console.log("aaa", cloneDeep(a));
      this.detailC = cloneDeep(a);
      this.dialogFormVisible1 = true;
    },
    pageChange(val) {
      console.log("113", val);
    },
    Find() {
      this.articleCats1 = [];
      //   this.articleCats = [];
      //   getOneArticleCat(this.formInline.id).then((res) => {
      //     console.log("reszzzz", res.data);
      //     this.articleCats.push(res.data.article);
      //   });
      this.articleCats.filter((item) => {
        if (item.title.indexOf(this.formInline.title) !== -1) {
          this.articleCats.push(item);
        }
        this.articleCats = [];
        this.articleCats = this.articleCats1;
      });
    },
    toEdit(articlecat) {
      this.dialogFormVisible = true; // 打开articleCat编辑对话框
      this.articleCat = cloneDeep(articlecat); // 深拷贝
      console.log(this.articleCat);
    },
    getArticleCatsPage(current) {
      this.articleCats = [];
      const data = {
        current: this.current,
        size: this.size,
      };
      ArticleCatPage(data)
        .then((res) => {
          console.log("入参", data, res);
          this.articleCats = res.data.articles;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    currentchange(current) {
      this.getArticleCatsPage(current);
      this.page.current = current;
    },
    del(id) {
      ElMessageBox.confirm("确定删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          const params = {
            id: id,
          };
          ArticleCatDelId(params)
            .then((res) => {
              if (res.success) {
                const index = this.articleCats.findIndex(
                  (item) => item.id === id
                );
                this.articleCats.splice(index, 1); // 移除被删除的分类
                this.page.total--; // 总数减一
                if (this.articleCats.length === 0 && this.page.current > 1) {
                  this.currentchange(this.page.current - 1);
                } else {
                  this.getArticleCatsPage(this.page.current);
                }
              } else {
                console.log(res.msg);
                return false;
              }
            })
            .catch((err) => {});
        })
        .catch(() => {});
    },
    toAdd() {
      this.dialogFormVisible = true; // 打开articleCat编辑对话框
      this.resetArticleCat(); // 重置 articleCat 对象
    },
    save() {
      const articlecat = this.articleCat;
      if (articlecat.id == 0) {
        AddArticleCat(articlecat)
          .then((res) => {
            if (res.success) {
              this.dialogFormVisible = false; // 关闭articleCat编辑对话框
              this.getArticleCatsPage(this.page.current); // 刷新当前页数据
              ElMessage(res.msg);
              this.resetArticleCat(); // 重置 articleCat 对象
            } else {
              ElMessage(res.msg);
              return false;
            }
          })
          .catch((err) => {
            ElMessage("网络错误联系管理员");
          });
      } else {
        ArticleCatEdit(articlecat)
          .then((res) => {
            if (res.success) {
              this.dialogFormVisible = false; // 关闭articleCat编辑对话框
              this.getArticleCatsPage(this.page.current); // 刷新当前页数据
              ElMessage(res.msg);
              this.resetArticleCat(); // 重置 articleCat 对象
            } else {
              ElMessage(res.msg);
              return false;
            }
          })
          .catch((err) => {
            ElMessage("网络错误联系管理员");
          });
      }
    },
    resetArticleCat() {
      this.articleCat = {
        "articleCatId": 0,
        "content": "",
        "createTime": "",
        "deleted": 0,
        "id": 0,
        "open": 0,
        "title": "",
        "updateTime": "",
        "userinfoId": 0,
      };
    },
  },
});
</script>
  
  <style lang="scss" scoped>
.title {
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 0 5vw;
  color:#6495ED;
}

.article-tools{
  margin-top:1em;
  margin-left:25%;
}

.detail{
  width:100%;
  text-align: center;
}

.flex-grow {
  flex-grow: 1;
}


</style>