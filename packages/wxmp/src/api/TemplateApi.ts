/**
 * @author Javen
 * @copyright javendev@126.com
 * @description 模板消息
 */

import * as util from 'util';
import { AccessToken, AccessTokenApi } from '@tnwx/accesstoken';
import { HttpKit } from '@tnwx/kits';

export class TemplateApi {
	public static sendTemplateUrl = 'https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=%s';
	private static setIndustryUrl = 'https://api.weixin.qq.com/cgi-bin/template/api_set_industry?access_token=%s';
	private static getIndustryUrl = 'https://api.weixin.qq.com/cgi-bin/template/get_industry?access_token=%s';
	private static getTemplateIdUrl = 'https://api.weixin.qq.com/cgi-bin/template/api_add_template?access_token=%s';
	private static delTemplateUrl = 'https://api.weixin.qq.com/cgi-bin/template/del_private_template?access_token=%s';
	private static getAllTemplateUrl = 'https://api.weixin.qq.com/cgi-bin/template/get_all_private_template?access_token=%s';

	/**
	 *  发送模板消息
	 *  @param tempJson
	 */
	public static async send(tempJson: string) {
		let accessToken: AccessToken = await AccessTokenApi.getAccessToken();
		let url = util.format(this.sendTemplateUrl, accessToken.getAccessToken);
		return HttpKit.getHttpDelegate.httpPost(url, tempJson);
	}
	/**
	 *  设置所属行业
	 *  @param industry_id1 公众号模板消息所属行业编号
	 *  @param industry_id2 公众号模板消息所属行业编号
	 */
	public static async setIndustry(industry_id1: string, industry_id2: string) {
		let accessToken: AccessToken = await AccessTokenApi.getAccessToken();
		let url = util.format(this.setIndustryUrl, accessToken.getAccessToken);
		return HttpKit.getHttpDelegate.httpPost(
			url,
			JSON.stringify({
				industry_id1: industry_id1,
				industry_id2: industry_id2
			})
		);
	}
	/**
	 *  获取设置的行业信息
	 */
	public static async getIndustry() {
		let accessToken: AccessToken = await AccessTokenApi.getAccessToken();
		let url = util.format(this.getIndustryUrl, accessToken.getAccessToken);
		return HttpKit.getHttpDelegate.httpGet(url);
	}
	/**
	 *  获取模板列表
	 *  @param templateIdShort 模板库中模板的编号
	 */
	public static async getTemplateId(templateIdShort: string) {
		let accessToken: AccessToken = await AccessTokenApi.getAccessToken();
		let url = util.format(this.getTemplateIdUrl, accessToken.getAccessToken);
		return HttpKit.getHttpDelegate.httpPost(
			url,
			JSON.stringify({
				template_id_short: templateIdShort
			})
		);
	}
	/**
	 *  删除模板
	 */
	public static async delTemplate() {
		let accessToken: AccessToken = await AccessTokenApi.getAccessToken();
		let url = util.format(this.delTemplateUrl, accessToken.getAccessToken);
		return HttpKit.getHttpDelegate.httpGet(url);
	}
	/**
	 *  获取模板列表
	 */
	public static async getAllTemplate() {
		let accessToken: AccessToken = await AccessTokenApi.getAccessToken();
		let url = util.format(this.getAllTemplateUrl, accessToken.getAccessToken);
		return HttpKit.getHttpDelegate.httpGet(url);
	}
}
