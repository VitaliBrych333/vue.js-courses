import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { BToast, Film } from '@/components/shared/interfaces/interfaces'

@Component({})
export default class CustomToastComponent extends Vue {
  @Prop(Object) readonly info!: Film

  private $bvToast!: BToast;
  private toastId!: string;

  public onClick(event: Event): void {
    const value = (event.target as HTMLButtonElement).textContent;
    if (value) {
      this.$bvToast.hide(this.toastId);
      this.$store.commit('SET_EDIT_FILM', { filmEdit: this.info, actionType: value });
    }
  }

  private created(): void {
    this.toastId = this.info.id.toString()
  }
}
