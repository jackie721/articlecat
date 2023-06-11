<template>
  <div class="articleCats">
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
  <div class="title"><h1>文章列表</h1></div>
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
        <el-form-item>
          <el-input v-model="formInline.title" placeholder="请输入关键词"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="Find">查询</el-button>
          <el-button type="warning" @click="toAdd">添加</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 表格 -->
    <el-table :data="articleCats" stripe style="width: 100%">
      <!-- 列定义 -->
      <el-table-column fixed prop="id" label="id" width="80" sortable />
      <el-table-column prop="title" label="文章标题" width="120" />
      <!-- <el-table-column prop="parentId" label="夫级id" width="120" /> -->
      <el-table-column prop="content" label="文章内容" width="500" />
      <el-table-column prop="createTime" label="创建时间" width="200" />
      <el-table-column prop="updateTime" label="更新时间" width="200" />>
      <el-table-column fixed="right" label="操作" width="300">
        <template #default="scope">
          <el-button  type="primary" size="small" @click="toEdit(scope.row)" plain
            >更新</el-button
          >
          <!-- 更新按钮 -->
          <el-button type="primary" size="small" @click="del(scope.row.id)" plain
            >删除</el-button
          >
          <el-button
            type="primary"
            size="small"
            @click="daohang(scope.row)" plain
            >查看</el-button
          >
        </template>
      </el-table-column>
    </el-table>

 
  </div>

  <!-- articleCat编辑对话框 -->
  <el-dialog v-model="dialogFormVisible" title="文章编辑">
    <el-form :model="articleCat">
      <el-form-item label="文章标题" :label-width="formLabelWidth">
        <el-input v-model="articleCat.title" autocomplete="off" />
      </el-form-item>
      <el-form-item label="文章内容" :label-width="formLabelWidth">
        <el-input
          type="textarea"
          :rows="5"
          placeholder="请输入内容"
          v-model="articleCat.content"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="创建时间" :label-width="formLabelWidth">
        <el-date-picker
          v-model="articleCat.createTime"
          type="date"
          autocomplete="off"
          placeholder="选择日期"
        />
      </el-form-item>
      <el-form-item label="更新时间" :label-width="formLabelWidth">
        <el-date-picker
          v-model="articleCat.updateTime"
          type="date"
          autocomplete="off"
          placeholder="选择日期"
        />
      </el-form-item>
    </el-form>

    <!-- 对话框底部按钮 -->
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <!-- 取消按钮 -->
        <el-button type="primary" @click="save">保存</el-button>
        <!-- 保存按钮 -->
      </span>
    </template>
  </el-dialog>
  <el-dialog v-model="dialogFormVisible1" title="查看">
    <div style="width: 45vw; height: 100vh">
      <div class="title" style="font-size: 1.2vw; font-weight: bold">
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
            ElMessage("失败");
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
            ElMessage("失败");
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
  margin-top:2ch;
  text-align: center;
}

.flex-grow {
  flex-grow: 1;
}




</style>